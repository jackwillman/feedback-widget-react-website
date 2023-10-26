import { Popover } from '@headlessui/react';

import WidgetForm from './WidgetForm';
import {
    WidgetPopover,
    WidgetButton,
    WidgetIcon,
    WidgetSpan
} from './styled';

const Widget = function WidgetComponent() {    
    return (
        <WidgetPopover>            
            <Popover.Panel>
                <WidgetForm />
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