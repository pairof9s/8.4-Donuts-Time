var React = require('react');


var FormUpload = React.createClass({
  uploadFile: function (e) {

      var fd = new FormData();
      fd.append( 'file', this.refs.file.getDOMNode().files[0] );

      $.ajax({
          url: 'https://d9-dev-server.herokuapp.com/classes/D9Library',
          data: fd,
          processData: false,
          contentType: false,
          type: 'POST',
          success: function(data){
              alert(data);
          }
      });
      e.preventDefault()
  },
  render: function() {
      return (
        <div>
           <form ref="uploadForm" className="uploader form-group" encType="multipart/form-data" >
              <input ref="file" type="file" name="file" className="upload-file"/>
              <input className="btn btn-warning btn-sm" type="button" ref="button" value="Upload" onClick={this.uploadFile} />
          </form>
        </div>
    );
  },
});

module.exports = FormUpload;
