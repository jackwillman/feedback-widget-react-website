import { Popover } from '@headlessui/react';

import { CookiesType } from '../../lib/types';
import WidgetForm from './WidgetForm';
import {
    WidgetPopover,
    WidgetButton,
    WidgetIcon,
    WidgetSpan
} from './styled';

interface WidgetProps {
    cookies : CookiesType;
    isLoggedIn : boolean;
};

const Widget = function WidgetComponent({
    cookies,
    isLoggedIn
} : WidgetProps) {
    return (
        <WidgetPopover>            
            <Popover.Panel>
                <WidgetForm 
                    cookies={ cookies }
                    isLoggedIn={ isLoggedIn }
                />
            </Popover.Panel>    

            <WidgetButton>
                <WidgetIcon weight="bold"/>    
                <WidgetSpan>
                    Feedback
                </WidgetSpan>
            </WidgetButton>   

        </WidgetPopover>
    );
};

export default Widget;