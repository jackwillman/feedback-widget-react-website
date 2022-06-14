import { Popover } from '@headlessui/react';

import WidgetForm from './WidgetForm';

import styled from './styled';

const Widget = function WidgetComponent() {    
    return (
        <styled.WidgetPopover>
            
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
    
            <styled.WidgetButton>
                <styled.WidgetIcon />
    
                <styled.WidgetSpan>
                    Feedback
                </styled.WidgetSpan>
            </styled.WidgetButton>
    
        </styled.WidgetPopover>
    );
};

export default Widget;