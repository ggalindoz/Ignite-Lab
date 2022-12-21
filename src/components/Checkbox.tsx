import { Slot } from '@radix-ui/react-slot'
import * as CheckboxPrimary from '@radix-ui/react-checkbox'
import {Check} from 'phosphor-react'

export interface CheckBoxProps extends CheckboxPrimary.CheckboxProps { }

export function Checkbox(props: CheckBoxProps) {
    return (
        
            <CheckboxPrimary.Root className=" w-6 h-6 p-[2x] bg-gray-800 rounded" {...props}>
                <CheckboxPrimary.Indicator asChild>
                    <Check weight='bold' className='h-5 w-5 text-cyan-500' />
                </CheckboxPrimary.Indicator>
            </CheckboxPrimary.Root>
        
    )
}  
