import Text from "./components/text";
import Icon from "./components/icon";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PencilSimpleIcon from "./assets/icons/pencil-simple.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinerIcon from "./assets/icons/spiner.svg?react";
import XIcon from "./assets/icons/x.svg?react";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text 
        variant={"body-sm-bold"} 
        className="text-pink-base">
          Hello World
        </Text>

        <Text 
        variant={"body-md"} 
        className="text-green-base">
          Hello World
        </Text>

        <Text 
        variant={"body-md-bold"} 
        className="text-pink-base">
          Hello World
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-base" />
        <Icon svg={CheckIcon} />
        <Icon svg={PencilSimpleIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinerIcon} animate />
        <Icon svg={XIcon} className="fill-gray-400"/>
      </div>
    </div>
  )
}
