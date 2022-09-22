import {
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
  IsNumber,
} from "class-validator";
export default class DeleteDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  ids: number[];
}
