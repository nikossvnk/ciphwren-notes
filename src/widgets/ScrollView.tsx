// SPDX-FileCopyrightText: © 2019 EteSync Authors
// SPDX-License-Identifier: GPL-3.0-only

import * as React from "react";
import { ScrollViewProps, ScrollView as NativeScrollView } from "react-native";
import { useTheme } from "../theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// (without the keyboard callbacks, which KeyboardAwareScrollView types differently from React Native)
type PropsType = Omit<ScrollViewProps, "onKeyboardWillShow" | "onKeyboardDidShow" | "onKeyboardWillHide" | "onKeyboardDidHide">;

export default function ScrollView(inProps: React.PropsWithChildren<PropsType> & { keyboardAware?: boolean }) {
  const { keyboardAware, style, ...props } = inProps;
  const theme = useTheme();

  const Scroller = (keyboardAware) ? KeyboardAwareScrollView : NativeScrollView;

  return (
    <Scroller style={[{ backgroundColor: theme.colors.background }, style]} {...props} />
  );
}
