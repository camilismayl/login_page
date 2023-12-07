import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHeaderSubStyles } from './header-sub.style';
import { LeftMenuToggle } from 'assets/images/icons/left-menu-toggle';
import classNames from 'classnames';
import { setLocale } from 'store/store.reducer';
import { ILanguages, IState } from 'store/store';
import { environment } from 'core/configs/app.config';
import { ILang } from 'assets/lang/lang';
import { generateGuid } from 'core/helpers/generate-guid';
import { useStore } from 'store/store.config';

const HeaderSubComponent = () => {};

export default HeaderSubComponent;
