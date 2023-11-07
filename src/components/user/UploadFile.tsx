import React from "react";
import { InboxOutlined } from "@ant-design/icons";
// import type { UploadProps } from "antd";
import { message, Upload } from "antd";

interface UploadFileProps {
  onUploadSuccess: (fileName: string) => void;
}

const { Dragger } = Upload;

// const props: UploadProps = {
//   name: "file",
//   multiple: true,
//   action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== "uploading") {
//       console.log(info.file, info.fileList);
//     }
//     if (status === "done") {
//       message.success(`${info.file.name} file uploaded successfully.`);
      
//     } else if (status === "error") {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
//   onDrop(e) {
//     console.log("Dropped files", e.dataTransfer.files);
//   },
// };

const UploadFile: React.FC<UploadFileProps> = ({ onUploadSuccess }) => {
  const props = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info: any) {
      const { status, name } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${name} file uploaded successfully.`);
        // Notify the parent component about the successful upload
        onUploadSuccess(name);
      } else if (status === "error") {
        message.error(`${name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
    </Dragger>
  );
};
export default UploadFile;
