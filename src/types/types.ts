export type PasswordGenerator = (
  length: number,
  numbers: boolean,
  bigLettrers: boolean,
  specialChar: boolean
) => void;