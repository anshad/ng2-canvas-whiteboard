import { Observable } from "rxjs/Observable";
import { CanvasWhiteboardUpdate } from "./canvas-whiteboard-update.model";
export declare class CanvasWhiteboardService {
    private _canvasDrawSubject;
    canvasDrawSubject$: Observable<CanvasWhiteboardUpdate[]>;
    private _canvasClearSubject;
    canvasClearSubject$: Observable<any>;
    private _canvasUndoSubject;
    canvasUndoSubject$: Observable<any>;
    private _canvasRedoSubject;
    canvasRedoSubject$: Observable<any>;
    drawCanvas(updates: CanvasWhiteboardUpdate[]): void;
    clearCanvas(): void;
    undoCanvas(updateUUD: string): void;
    redoCanvas(updateUUD: string): void;
}
