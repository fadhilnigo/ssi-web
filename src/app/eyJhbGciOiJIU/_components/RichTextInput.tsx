/* eslint-disable no-param-reassign */
import React, {
  forwardRef, MutableRefObject, useEffect, useLayoutEffect, useRef,
} from 'react';
import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

interface IRichTextInput {
  defaultValue?: string;
  onTextChange?: Function;
  onSelectionChange?: Function;
}

// Editor is an uncontrolled React component
const RichTextInput = forwardRef<Quill, IRichTextInput>(
  ({
    defaultValue, onTextChange, onSelectionChange,
  }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        const editorContainer = container.appendChild(
          container.ownerDocument.createElement('div'),
        );
        const quill = new Quill(editorContainer, {
          theme: 'snow',
        });

        if (typeof ref === 'function') {
          ref(quill);
        } else if (ref && typeof ref === 'object') {
          // If ref is a RefObject
          (ref as MutableRefObject<Quill>).current = quill;
        }

        if (defaultValueRef.current) {
          quill.clipboard.dangerouslyPasteHTML(defaultValueRef.current);
        }

        quill.on(Quill.events.TEXT_CHANGE, (...args) => {
          onTextChangeRef.current?.(...args);
        });

        quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
          onSelectionChangeRef.current?.(...args);
        });
      }

      return () => {
        // @ts-ignore
        ref.current = null;
        // @ts-ignore
        container.innerHTML = '';
      };
    }, [ref]);

    return (
      <div
        className="min-h-[5rem]"
        ref={containerRef}
      />
    );
  },
);

RichTextInput.displayName = 'RichTextInput';

export default RichTextInput;
