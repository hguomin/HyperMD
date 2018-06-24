/**
 * Ready-to-use functions that powers up your Markdown editor
 *
 * @internal Part of HyperMD core.
 *
 * You shall NOT import this file; please import "core" instead
 */
import * as CodeMirror from "codemirror";
import { cm_t } from "./type";
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/markdown-fold';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/fold/foldgutter.css';
import '../theme/hypermd-light.css';
/**
 * The default configuration that used by `HyperMD.fromTextArea`
 *
 * Addons may update this object freely!
 */
export declare var suggestedEditorConfig: CodeMirror.EditorConfiguration;
/**
 * Initialize an editor from a <textarea>
 * Calling `CodeMirror.fromTextArea` with recommended HyperMD options
 *
 * @see CodeMirror.fromTextArea
 *
 * @param {HTMLTextAreaElement} textArea
 * @param {object} [config]
 * @returns {cm_t}
 */
export declare function fromTextArea(textArea: HTMLTextAreaElement, config?: object): cm_t;
/**
 * Turn HyperMD editor into to a normal editor
 *
 * Disable HyperMD visual effects.
 * Interactive addons like click or paste are not affected.
 *
 * @param {cm_t} editor Created by **HyperMD.fromTextArea**
 * @param {string} [theme]
 */
export declare function switchToNormal(editor: cm_t, theme?: string): void;
/**
 * Revert what `HyperMD.switchToNormal` does
 *
 * @param {cm_t} editor Created by **HyperMD.fromTextArea**
 * @param {string} [theme]
 */
export declare function switchToHyperMD(editor: cm_t, theme?: string): void;
