/*
 Declaration files are how the Typescript compiler knows about the type information(or shape) of an object.
 They're what make intellisense work and make Typescript know all about your code.

 A wildcard module is declared below to allow third party libraries to be used in an app even if they don't
 provide their own type declarations.

 To learn more about using third party libraries in an Ionic app, check out the docs here:
 http://ionicframework.com/docs/v2/resources/third-party-libs/

 For more info on type definition files, check out the Typescript docs here:
 https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
 */
declare module '*'
;

declare namespace PouchDB {

  type SyncEvent = "change" | "paused" | "active" | "denied" | "complete" | "error";
  type SyncDirection = "push" | "pull";

  export interface Database<Content extends Core.Encodable> {
    sync(remoteDB: Database<Content>): SyncEventEmitter;
    sync(remoteDB: Database<Content>, options: any): SyncEventEmitter;

    changes(options: any): ChangeEventEmitter;
  }

  export interface SyncEventEmitter {
    on(event: SyncEvent, callback: (response?: SyncResponse) => void): SyncEventEmitter;
    cancel();
  }

  export interface SyncResponse {
    direction: SyncDirection;
    change: ReplicationResponse;
  }

  export interface ReplicationResponse {
    doc_write_failures: number,
    docs_read: number,
    docs_written: number,
    errors: Array<any>,
    last_seq: number,
    ok: boolean,
    start_time: Date,
    end_time?: Date,
    status?: string,
    docs?: Array<any>
  }

  type ChangeEvent = "change" |"complete" | "error";

  export interface ChangeEventEmitter {
    on(event: ChangeEvent, callback: (response?: ChangeResponse) => void): ChangeEventEmitter;
    cancel();
  }

  export interface ChangeResponse {
    //TODO
  }
}
