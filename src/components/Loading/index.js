import React from "react";
import ReactLoading from "react-loading";
import { theme } from '../globalStyle';
import { Section } from "./styles";

export const Loading = () => (
  <Section>
    <ReactLoading type='spin' color={theme.colors.blue900} />
  </Section>
);

  