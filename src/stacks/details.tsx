import React from 'react';
import { RouteProp } from '@react-navigation/native';

import { DetailView } from '../views/detailView';
import { StackNavigatorParamlist } from '../types';

type Props = {
  route: RouteProp<StackNavigatorParamlist, 'Details'>;
};

export const Details = (props: Props) => {
  return <DetailView {...props.route.params} />;
};
