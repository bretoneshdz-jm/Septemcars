import {ChevronDownIcon,ChevronUpIcon,CheckIcon,type LucideProps} from 'lucide-react';
const icons={ChevronDownIcon,ChevronUpIcon,CheckIcon};
export function IconPlaceholder({lucide,tabler:_tabler,hugeicons:_hugeicons,phosphor:_phosphor,remixicon:_remixicon,...props}:LucideProps&{lucide?:string;tabler?:string;hugeicons?:string;phosphor?:string;remixicon?:string}){const Icon=icons[lucide as keyof typeof icons]??ChevronDownIcon;return <Icon {...props}/>;}
