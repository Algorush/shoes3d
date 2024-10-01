import { memo } from 'react';
import {
  Environment as EnvironmentImpl,
} from '@react-three/drei';
import React from 'react';

import { state } from './store/index';

let path=`${state.assetsPath}/assets/pines_small.hdr`

export const MakeEnvironment = memo(() => (
  <>
    <EnvironmentImpl environmentIntensity="0.25" files={path} />
  </>
));
