import { Injectable } from '@angular/core';

import { AlfrescoApiService } from '@alfresco/adf-core';
import { RecordEntry } from 'alfresco-js-api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RmService {
  gsApiURL: '/api/-default-/public/gs/versions/1';

  constructor(private apiService: AlfrescoApiService) {
  }


  declareRecord(node: string, opts: any) {
    this.apiService.getInstance().gsCore.filesApi.declareRecord(node, opts);
  }

  private handleError(error: Response): any {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }

/*
  declareRecord(nodeId: string, opts: any): RecordEntry {
    opts = opts || {};
    const postBody = null; // No need to POST content, we are just setting metadata on Node

    // verify the required parameter 'nodeId' is set
    if (nodeId === undefined || nodeId === null) {
      throw new Error('Missing the required parameter \'nodeId\' when calling declareRecord');
    }


    const pathParams = {
      'fileId': nodeId
    };
    const queryParams = {
      'hideRecord': opts['hideRecord'],
      'include': {},
      'fields': {}
    };
    const headerParams = { };
    const formParams = { };

    const authNames = ['basicAuth'];
    const contentTypes = ['application/json'];
    const accepts = ['application/json'];
    const returnType = RecordEntry;

    return this.apiService.getInstance().ecmClient.call(
      this.gsApiURL + '/files/{fileId}/declare', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }*/
}
/**
 *
 * Declare as record

 Declares the file **fileId** in the unfiled records container.
 The original file is moved to the Records Management site and a secondary parent association
 is created in the file&#39;s original site.

 ### Example
 ```javascript

 var fileId = "fileId_example"; // String | The identifier of a non-record file.

 var opts = {
  'hideRecord': false, // Boolean | Flag to indicate whether the record should be hidden from the current parent folder.
  'include': ["include_example"], // [String] | Returns additional information about the record.
    Any optional field from the response model can be requested.
    For example: * allowableOperations * content * isCompleted * path
  'fields': ["fields_example"] // [String] | A list of field names.
    You can use this parameter to restrict the fields returned within a response if, for example,
    you want to save on overall bandwidth.  The list applies to a returned individual entity or entries
    within a collection.  If the API method also supports the **include** parameter,
    then the fields specified in the **include** parameter are returned in addition to
    those specified in the **fields** parameter.
};
 this.alfrescoJsApi.gsCore.filesApi.declareRecord(fileId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
 *
 *
 */
