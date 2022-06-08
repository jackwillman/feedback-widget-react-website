import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

import WidgetForm from './WidgetForm';

const Widget = function WidgetComponent() {    
    return (
        <Popover className="widget-div">
            
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
    
            <Popover.Button className="widget-button group">
                <ChatTeardropDots className="widget-icon"/>
    
                <span className="widget-span group-hover:max-w-xs">
                    Feedback
                </span>
            </Popover.Button>
    
        </Popover>
    );
};

export default Widget;