import React, { useState } from "react";
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
  const [groomNickname, setGroomNickname] = useState(groomNickName);
  const [brideNickname, setBrideNickname] = useState(brideNickName);
  const [selectedCover, setSelectedCover] = useState<File | null>(
    cover || null
  );
  const dispatch = useDispatch();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedCover(file);
      dispatch(SET_COVER({ cover: file, groomNickName, brideNickName }));
    }
  };

  const handleGroomNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGroomName = e.target.value;
    setGroomNickname(newGroomName);
    dispatch(
      SET_COVER({
        cover: selectedCover,
        groomNickName: newGroomName,
        brideNickName,
      })
    );
  };

  const handleBrideNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBrideName = e.target.value;
    setBrideNickname(newBrideName);
    dispatch(
      SET_COVER({
        cover: selectedCover,
        groomNickName,
        brideNickName: newBrideName,
      })
    );
  };

  const handleDeleteImage = () => {
    setSelectedCover(null);
    dispatch(SET_COVER({ cover: null, groomNickName, brideNickName }));
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
          value={groomNickname}
        />
        <Input
          label={`Bride's nickname`}
          placeholder="Woman"
          onChange={handleBrideNameChange}
          value={brideNickname}
        />
      </div>
    </div>
  );
};

export default CoverForm;
