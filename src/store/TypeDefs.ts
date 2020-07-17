
// FIXME: improve type declaration with static information
import boxes from "@/components/boxes";

export type BoxType = keyof (typeof boxes);

export interface BoxState {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
  type: string;
  itemId: string | undefined;
}

export interface RootState {
  layout: BoxState[];
}
