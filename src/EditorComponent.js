import EditorJs from 'react-editor-js';

// tools
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'

import AlignmentTuneTool from 'editorjs-text-alignment-blocktune'
import Underline from '@editorjs/underline';

import createGenericInlineTool, {
    ItalicInlineTool,
    UnderlineInlineTool,
} from 'editorjs-inline-tool'

import NestedList from '@editorjs/nested-list';



export const EDITOR_JS_TOOLS = {
    embed: Embed,
    table: Table,

    paragraph: {
        class: Paragraph,
        // inlineToolbar: false,
        // tunes: ['anyTuneName'],
        inlineToolbar: true,
    },

    // list: List,
    nestedList: NestedList,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    image: Image,
    raw: Raw,
    // header: Header,
    header: {
        class: Header,
        // tunes: ['anyTuneName'],
    },

    quote: Quote,
    marker: Marker,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,

    // TODO: удалить AlignmentTuneTool плагин, если не работает
    // anyTuneName: {
    //     class: AlignmentTuneTool.AlignmentBlockTune,
    //     config:{
    //         default: "left",
    //         blocks: {
    //             header: 'center',
    //             list: 'right'
    //         }
    //     },
    // },

    bold: {
        class: createGenericInlineTool({
            sanitize: {
                strong: {},
            },
            shortcut: 'CMD+B',
            tagName: 'STRONG',
            toolboxIcon:
                '<svg class="icon icon--bold" width="12px" height="14px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bold"></use></svg>',
        }),
    },
    // or use a pre-defined tool instead
    italic: ItalicInlineTool,
    underline: UnderlineInlineTool,

}


export function EditorComponent () {
    return (
        <EditorJs data={{}} tools={EDITOR_JS_TOOLS}/>
    );
}