import React, {useRef} from 'react';
import S3 from 'react-aws-s3';


export default function Upload(){
   const fileInput = useRef();
   const handleClick = event => {
      event.preventDefault();
      let file = fileInput.current.files[0];
      let newFileName = fileInput.current.files[0].name;
      const config ={
         bucketName : "quizees-app",
         dirName: "quize-app",
         region: "ap-northest-1",
         accessKeyId: "AKIA2TMR2D4RFTLOXI75",
         secretAccessKey: "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"
      };
      const ReactS3Client = new S3(config);
      ReactS3Client.uploadFile(file, newFileName).then(data => {
         console.log(data);
         if(data.statys === 204){
            console.log("success");
         }else {
            console.log("fail");
         }
      });
   }
   return(
      <>
        <form className="upload-steps" onSubmit={handleClick} action="/user/image/">
          <label>
            Upload file:
            <input type='file' ref={fileInput} />
          </label>
          <br />
          <button type='submit'>Upload</button>
        </form>
      </>
      );
}