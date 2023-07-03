import React, { CSSProperties, useMemo } from 'react';
import classnames from 'classnames/bind';
import 'typeface-roboto';

import { TypographyVariant, Color, TextAlign } from '../../utils/constants';
import { getKeyByValue } from '../../utils/utils';
import styles from './Typography.scss';

const cx = classnames.bind(styles);

export interface TextProps {
  color?: Color;
  variant?: TypographyVariant,
  textAlign?: TextAlign,
  upperCase?: boolean,
  style?: CSSProperties,
  className?: string,
  children?: React.ReactNode,
}

const Typography = ({
  color = Color.p0,
  variant = TypographyVariant.Subheader,
  textAlign = TextAlign.center,
  upperCase = false,
  style,
  className,
  children
}: TextProps) => {
  const WrapperTag = variant;
  const tagEnumName = useMemo(() => getKeyByValue(TypographyVariant, variant), [variant]);

  return (
    <WrapperTag
      className={cx(
        'typography',
        `typography__${tagEnumName}`,
        upperCase && 'typography--upper-case',
        className
      )}
      style={{
        color: color || Color.p0,
        textAlign: textAlign,
        ...style
      }}
    >
      {children}
    </WrapperTag>
  );
};

export default Typography;
