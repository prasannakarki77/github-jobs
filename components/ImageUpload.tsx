"use client";

import { FileUp, ImageOffIcon, ImagePlusIcon, SaveIcon } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { Dispatch, SetStateAction, useCallback } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onImageUpload: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const router = useRouter();

  const handleUpload = useCallback(
    (result: any) => {
      if (result.info.secure_url) {
        onImageUpload(result.info.secure_url);
      }
    },
    [onImageUpload]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="whwpef8k"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <Button variant={"outline"} onClick={() => open?.()}>
            <FileUp size={20} className="mr-1" /> Upload Photo
          </Button>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
