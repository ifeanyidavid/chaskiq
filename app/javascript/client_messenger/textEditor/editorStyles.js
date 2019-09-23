import styled from '@emotion/styled'

import EditorStyles from 'Dante2/package/es/styled/base'

const Other = styled('div')`
  ${(props)=>{
    debugger
  }}
`
//styled('EditorStyles')
const NewEditorStyles = styled(EditorStyles)`
  
  display: flex;

  button.inlineTooltip-button.scale {
    background: #fff;
  }

  button.inlineTooltip-button.control {
    background: #fff;
  }

  .public-DraftEditorPlaceholder-root {
    font-size: inherit;
  }

  ${(props)=> !props.campaign ? 
    `.public-DraftEditor-content{
      max-height: calc(35vh - 83px);
      overflow: auto;
      height: 100%;
    }` : ''
  }

  .postContent{
    padding: 10px;
  }

  .graf graf--h2{
    font-size: 2.6;
  }

  a{
    color: ${(props)=> props.theme.dante_accent_color };
  }
  

  .layoutSingleColumn{
    grid-area: editor;
  }

  .graf--p,
  .graf--blockquote,
  .graf--pullquote {
    margin-bottom: 0px;
  }

  .inlineTooltip-menu{
    height: 34px;
  }

  .inlineTooltip-button {
    width: 28px;
    height: 28px;
    line-height: 25px;
  }

  .danteEditorControls {
    //border-top: 1px solid #ccc;
    //padding: 10px;
  }

  .section-inner.layoutSingleColumn{
    min-height: 50px;
    word-wrap: break-word;
    -ms-word-break: keep-all;
    word-break: break-word;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    font-size: 14px;
    line-height: 18px;
  }

  .tooltip-icon {
    svg{
      width: 16px;
      height: 16px;      
    }

  }

`;

export default NewEditorStyles