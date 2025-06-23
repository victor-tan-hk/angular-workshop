import { TestBed } from '@angular/core/testing';

import { BasicService } from './basic.service';

describe('BasicService', () => {
  let service: BasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // Configure the service via Angular DI
    service = TestBed.inject(BasicService);
  });


  // Test with an array containing multiple string elements
  it('should execute performLongestString with normal array ', () => {

    let testArray : string[] = ["cat","dog","elephant","mouse"];
    expect(service.findLongestString(testArray)).toEqual("elephant");

  });

  // Test with an array containing a single element
  it('should execute performLongestString with array containing single element ', () => {

    let testArray : string[] = ["cat"];
    expect(service.findLongestString(testArray)).toEqual("cat");

  });

  // Test with an empty array 
  it('should execute performLongestString with an empty array ', () => {

    let testArray : string[] = [];
    expect(service.findLongestString(testArray)).toEqual("");

  });


});
