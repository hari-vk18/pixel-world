import { useEffect } from "react";

export default function Chatbot() {
    useEffect(() => {
        const injectStylesDeep = (messenger) => {
            const root = messenger.shadowRoot;
            if (!root) return false;

            const chat = root.querySelector("df-messenger-chat");
            if (!chat || !chat.shadowRoot) return false;

            /* =========================
               CHAT WINDOW STYLES
            ========================== */
            const wrapperStyle = document.createElement("style");

            wrapperStyle.textContent = `
        
        /* =========================
           MINIMIZED POPUP
        ========================== */
        .chat-wrapper.chat-min,
        #df-chat-wrapper.chat-min {
          height: 80px !important;
          min-height: 80px !important;
          max-height: 120px !important;
          background-color: #FFFFFF !important;
        }

        /* =========================
           OPEN CHAT WINDOW
        ========================== */
        .chat-wrapper.chat-open:not(.chat-min),
        #df-chat-wrapper.chat-open:not(.chat-min) {
          width: 280px !important;
          min-width: 280px !important;
          max-width: 280px !important;

          height: 320px !important;
          min-height: 320px !important;
          max-height: 320px !important;
        }

        /* Extra force for internal wrapper */
        df-messenger-chat {
          height: 320px !important;
          min-height: 320px !important;
          max-height: 320px !important;
        }

        /* Smooth transition */
        .chat-wrapper {
          transition: height 0.2s ease !important;
        }

        /* =========================
           MESSAGE AREA FIX
        ========================== */

        df-message-list {
          padding-top: 8px !important;
        }

        .message-list-wrapper {
          padding: 8px !important;
        }

        .message-list-wrapper .bot-message,
        .message-list-wrapper .message {
          max-width: 85% !important;
          padding: 10px 14px !important;
          font-size: 14px !important;
          line-height: 1.4 !important;
          border-radius: 12px !important;
          word-break: break-word !important;
          white-space: normal !important;
        }

        df-messenger-user-input {
          padding: 0px !important;
        }
      `;

            /* =========================
               BUTTON + ICON FIX
            ========================== */
            const buttonStyle = document.createElement("style");

            buttonStyle.textContent = `
        
        /* Main floating button */
        button#widgetIcon {
          background-color: #FFFFFF !important;
          background: #FFFFFF !important;
          border-color: #FFFFFF !important;

          width: 48px !important;
          height: 48px !important;
          min-width: 48px !important;
          min-height: 48px !important;

          padding: 0 !important;
          font-size: 0 !important;

          display: flex !important;
          align-items: center !important;
          justify-content: center !important;

          line-height: normal !important;
          box-sizing: border-box !important;
          gap: 0 !important;
          overflow: hidden !important;

          color: transparent !important;
          text-indent: -9999px !important;

          position: relative !important;
        }

        /* Chat icon */
        button#widgetIcon img,
        button#widgetIcon .df-chat-icon {
          width: 24px !important;
          height: 24px !important;
          max-width: 24px !important;
          max-height: 24px !important;

          position: absolute !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;

          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
          object-fit: contain !important;
        }

        /* Close icon parent */
        button#widgetIcon > #closeIcon {
          position: absolute !important;
          inset: 0 !important;

          display: flex !important;
          align-items: center !important;
          justify-content: center !important;

          width: 100% !important;
          height: 100% !important;
        }

        /* Perfect center for X SVG */
        button#widgetIcon div #closeSvg {
          position: absolute !important;
          top: 50% !important;
          left: 50% !important;

          width: 24px !important;
          height: 24px !important;

          transform: translate(-50%, -50%) rotate(0deg) !important;

          opacity: 1 !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        /* Open state button color */
        div.df-messenger-wrapper.expanded button#widgetIcon {
          background-color: #052a82 !important;
          background: #052a82 !important;
          border-color: #052a82 !important;
        }

        /* Rounded launcher wrapper */
        div.df-messenger-wrapper {
          border-radius: 50% !important;
        }
      `;

            chat.shadowRoot.appendChild(wrapperStyle);
            root.appendChild(buttonStyle);

            return true;
        };

        const waitForReady = () => {
            const messenger = document.querySelector("df-messenger");
            if (!messenger || !messenger.shadowRoot) return false;

            return injectStylesDeep(messenger);
        };

        /* =========================
           LOAD DIALOGFLOW SCRIPT
        ========================== */
        const script = document.createElement("script");
        script.src =
            "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
        script.async = true;

        script.onload = () => {
            const interval = setInterval(() => {
                if (waitForReady()) {
                    clearInterval(interval);
                }
            }, 100);
        };

        document.body.appendChild(script);

        /* =========================
           GLOBAL BASE STYLES
        ========================== */
        const style = document.createElement("style");

        style.textContent = `
      df-messenger {
        --df-messenger-bot-message: #E8E8E8;
        --df-messenger-button-titlebar-color: #052a82;
        --df-messenger-button-background: #FFFFFF;
        --df-messenger-send-icon: #052a82;
        --df-messenger-user-message: #E8E8E8;

        --df-messenger-chat-width: 320px;
        --df-messenger-chat-height: 420px;

        width: 320px !important;
        z-index: 9999;
      }
    `;

        document.head.appendChild(style);

        return () => {
            if (script.parentNode) {
                document.body.removeChild(script);
            }

            if (style.parentNode) {
                document.head.removeChild(style);
            }
        };
    }, []);

    return (
        <df-messenger
            intent="WELCOME"
            chat-title="IOTC Assistant"
            chat-icon="/IOTC Real Asset logo blue 1 (1).png"
            agent-id="ac1ecd2a-0aa1-4a46-b15f-8a1986f89dc8"
            language-code="en"
            style={{
                position: "fixed",
                bottom: "16px",
                right: "16px",
            }}
        ></df-messenger>
    );
}