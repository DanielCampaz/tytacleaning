import { useState } from "react";
import { useParams } from "react-router-dom";
import { ServiceDataType, ServicesData } from "../../utils";

export interface useDataServiceProps {}

export type useDataServiceReturn = [
  ServiceDataType[],
  ServiceDataType | undefined,
  number | undefined
];

export default function useDataService(): useDataServiceReturn {
  const { id } = useParams();
  const ids = Number(id);
  const [data] = useState(ServicesData[ids]);
  return [ServicesData, data, ids];
}
