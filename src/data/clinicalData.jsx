import React from "react";
import { render } from "react-dom";
import CameraSvgComp from "../svg/camera.svg?react";
import FilterComp from "../svg/filter.svg?react";
import PlusIcon from "../svg/plus-icon.svg?react";
export const columns = [
  {
    title: "Patient Name",
    dataIndex: "name",
    key: "name",
    width: 300,
    align: "center",
    render: (e) => (
      <div className="grid grid-flow-col">
        <div>
          {
            <div>
              <h1 key={e[0].patientName}>{e[0].patientName}</h1>
            </div>
          }
        </div>
        <PlusIcon className=""></PlusIcon>
      </div>
    ),
  },
  {
    title: "Date of Birth",
    dataIndex: "age",
    key: "age",
    width: 300,
    align: "center",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 300,
    align: "center",
  },
  {
    title: "Baxter Patient ID",
    dataIndex: "pId",
    key: "pId",
    width: 300,
    align: "center",
  },
  {
    title: "Attending Physician",
    dataIndex: "phy",
    key: "phy",
    width: 300,
    align: "center",
  },
  {
    title: "Actions",
    dataIndex: "act",
    key: "",
    width: 100,
    className: "p-2",
    render: () => (
      <>
        <div>
          <CameraSvgComp />
        </div>
        <div>
          <FilterComp />
        </div>
      </>
    ),
  },
];

export const data = [
  {
    name: [{ patientName: "001, Patient Name" }],
    age: "07 December 1897",
    address: "assassoffji af faiojf i",
    pId: "O-BXEUS-1145",
    phy: "Ms Benty Physician 1",
  },
  {
    name: [{ patientName: "002, Clipat" }],
    age: "09 January 1993",
    address: "jfallfaafa afjaa j af",
    pId: "O-BXEUS-1124",
    phy: "Ms Benty Physician 1",
  },
];
