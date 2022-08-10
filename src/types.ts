import {ReactElement} from "react";

export type TFormatType =
  | "d_h_m_s"
  | "D_H_M_S"
  | "dd_hh_mm_ss"
  | "DD_HH_MM_SS"
  | undefined;

export type TRenderProps = (renderProps: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => ReactElement;

export enum EDateTime {
  D_H_M_S = "D_H_M_S",
  d_h_m_s = "d_h_m_s",
  DD_HH_MM_SS = "DD_HH_MM_SS",
  dd_hh_mm_ss = "dd_hh_mm_ss",
}
