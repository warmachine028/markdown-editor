import React, { useCallback, useEffect } from "react"
import useCodeMirror from "../../use-codemirror"
import "./styles.css"

interface Props {
	initialDoc: string
	onChange: (doc: string) => void
}

const Editor: React.FC<Props> = ({ onChange, initialDoc }) => {
	const handleChange = useCallback(state => onChange(state.doc.toString()), [onChange])
	const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
		initialDoc: initialDoc,
		onChange: handleChange,
	})

	useEffect(() => {
		if (editorView) {
			/* Nothing */
		}
	}, [editorView])
	return <div className="editor-wrapper" ref={refContainer} />
}

export default Editor
