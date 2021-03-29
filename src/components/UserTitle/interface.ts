interface TextEventTarget extends EventTarget {
    value: string
}
  
export interface MouseEventTarget extends React.FormEvent<HTMLElement> {
    target: TextEventTarget
}

export interface KeyEvent extends React.KeyboardEvent<HTMLElement> {
    key: string
}
