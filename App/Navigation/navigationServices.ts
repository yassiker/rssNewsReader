import {NavigationActions, StackActions} from 'react-navigation';

let navigatorReference;

function setTopLevelNavigator(navigatorRef): void {
  navigatorReference = navigatorRef;
}

function navigate(routeName, params?): void {
  navigatorReference.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function navigateBack(): void {
  navigatorReference.dispatch(NavigationActions.back());
}

function popToTop(): void {
  navigatorReference.dispatch(StackActions.popToTop());
}

function top(): void {
  navigatorReference.dispatch(StackActions.popToTop());
}

export default {
  navigate,
  navigateBack,
  setTopLevelNavigator,
  popToTop,
  top,
};
