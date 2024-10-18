import React, { ChangeEvent, useState } from "react";
import ImageInput from "../../image-input/ImageInput";
import Input from "../../input-group/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { SET_COVER } from "../../../services/redux/template-slice/TemplateSlice";
import { RootState } from "../../../services/redux/Store";
import ImagePreview from "../../image-preview/ImagePreview";

const CoverForm = () => {
  const { cover, groomNickName, brideNickName } = useSelector(
    (state: RootState) => state.template
  );
  const dispatch = useDispatch();
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const coverUrl = URL.createObjectURL(file);
      dispatch(SET_COVER({ cover: coverUrl, coverFile: file, groomNickName, brideNickName }));
    }
  };

  const handleGroomNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newGroomName = e.target.value;
    dispatch(
      SET_COVER({
        cover: cover,
        groomNickName: newGroomName,
        brideNickName,
      })
    );
  };

  const handleBrideNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newBrideName = e.target.value;
    dispatch(
      SET_COVER({
        cover: cover,
        groomNickName,
        brideNickName: newBrideName,
      })
    );
  };

  const handleDeleteImage = () => {
    dispatch(SET_COVER({ cover: "", groomNickName, brideNickName }));
  };

  return (
    <div>
      <p className="font-semibold text-custom-gray pr-16 mb-2 text-justify">
        Upload image that will be used as the main photo on the cover
      </p>
      {cover ? (
        <ImagePreview image={cover} handleDeleteImage={handleDeleteImage} />
      ) : (
        <ImageInput handleImageChange={handleImageChange} />
      )}
      <div className="mt-10 flex flex-col gap-5">
        <Input
          label={`Groom's nickname`}
          placeholder="Man"
          onChange={handleGroomNameChange}
          value={groomNickName}
        />
        <Input
          label={`Bride's nickname`}
          placeholder="Woman"
          onChange={handleBrideNameChange}
          value={brideNickName}
        />
      </div>
    </div>
  );
};

export default CoverForm;
