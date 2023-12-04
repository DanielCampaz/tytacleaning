import { useParams } from "react-router-dom";
import {
  DataProjects,
  DataProjectsType,
} from "../../utils/const/projectsconst";
import { useState } from "react";

export interface useDataServiceProps {}

export type useDataProjectsReturn = [
  DataProjectsType[],
  DataProjectsType | undefined,
  number | undefined
];

export default function useProjectsData(): useDataProjectsReturn {
  const { id } = useParams();
  const ids = Number(id);
  const [data] = useState(DataProjects[ids]);
  return [DataProjects, data, ids];
}
