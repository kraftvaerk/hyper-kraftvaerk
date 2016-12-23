const backgroundColor = '#171717';
const foregroundColor = '#eeeeee';
const cursorColor = '#cc2127';
const borderColor = 'transparent';
const copyOnSelect = true;
const cursorShape = 'BLOCK';

const colors = {
    black: '#000000',
    red: '#cc2127',
    green: '#33ff00',
    yellow: '#ffff00',
    blue: '#0066ff',
    magenta: '#cc00ff',
    cyan: '#1affdc',
    white: '#d0d0d0',
    lightBlack: '#808080',
    lightRed: '#cc2127',
    lightGreen: '#33ff00',
    lightYellow: '#ffff00',
    lightBlue: '#0066ff',
    lightMagenta: '#cc00ff',
    lightCyan: '#1affdc',
    lightWhite: '#ffffff'
}

const termCSS = `
      ${config.termCSS || ''}
      @keyframes blink {
        10%, 50% { opacity: 0 }
        60%, 100% { opacity: 1 }
      }

      .cursor-node[focus=true] {
        mix-blend-mode: difference;
      }
      .cursor-node[focus=true]:not([hyper-blink-moving]) {
        box-sizing: content-box !important;
        animation: blink 1s ease infinite;
      }
      
      x-screen {
        background: transparent !important;
      }
      x-screen a {
        color: #eee;
        border-bottom: 1px solid #cc2127;
        text-decoration: none;
      }
      x-screen a.hover {
        text-decoration: none;
        border-bottom: 1px solid #eee;
      }

      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color:${foregroundColor || 'rgba(255, 255, 255, 0.5)'};
      }
`;

const css = `
    ${config.css || ''}
    .header_header {
        background: #262626 !important;
    }
    .tab_tab::before {
        position: absolute;
        content: "";
        display: block;
        left: 0px;
        right: 0px;
        bottom: 0px;
        transition: border-color .3s ease-in-out;
        border-bottom: 3px solid transparent;
    }
    .tab_active::before {
        border-bottom: 3px solid #cc2127;
    }
    .tab_text {
        color: ${foregroundColor};
        border-color: transparent !important;
        opacity: 0.5;
    }
    .tab_active .tab_text {
        opacity: 1;
    }
    .tab_tab .tab_icon { 
        left: initial; 
        right: 10px; 
    }
    .splitpane_divider {
        background-color: rgba(255, 255, 255, 0.1) !important;
    }
    .terms_terms {
        background: url('${__dirname}/bg.jpg') bottom left;
    }
`;

exports.decorateConfig = config => {
    return Object.assign({}, config, {
        foregroundColor,
        backgroundColor,
        borderColor,
        cursorColor,
        colors,
        copyOnSelect,
        cursorShape,
        termCSS,
        css
    })
}
