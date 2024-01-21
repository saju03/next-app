import React, { useState } from 'react';
import HtmlParser from 'react-html-parser';
import ReactModal from 'react-modal';

const ReactModalView = ({isModelopen, setIsModelopen,content}) => {
    
const customStyles = {
    content: {
      width: "60%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
    return (
        <>
            
      <ReactModal
        isOpen={isModelopen}
        onRequestClose={() => setIsModelopen(false)}
        style={customStyles}
      >
        <div className="popup_wrap flDtlsModalnew fldtls_content faremodal">
          <button
            type="button"
            className=""
            data-dismiss="modal"
            onClick={() => setIsModelopen(false)}
          >X</button>
          <div className="fldtls_content" >
            {
              HtmlParser(
                content
              )} 
          </div>
        </div>
      </ReactModal>

        </>
    );
}

export default ReactModalView;
