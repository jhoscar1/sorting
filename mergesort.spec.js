describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1,2,3,4], [5,6,7,8])).toEqual([1,2,3,4,5,6,7,8]);
  });
  it('is able to merge two unsorted arrays into one sorted array', function() {
    expect(merge([2,3,4,1], [6,7,8,5])).toEqual([1,2,3,4,5,6,7,8]);
  })
});

describe('Merge Sort', function(){
  it('is able to sort an Array', function(){
    expect(mergeSort([1,2,3,4,5,6,7,8])).toEqual([1,2,3,4,5,6,7,8]);
  });
  it('is able to sort an array', function() {
    expect(mergeSort([2,3,4,1,6,7,8,5])).toEqual([1,2,3,4,5,6,7,8]);
  })
});

describe('Has a working split function' ,function() {
    beforeEach(function() {
        spyOn(window, 'split').and.callThrough();
    });
    it('is able to split an array into two halves', function() {
        expect(split([1,2,3,4,5,6,7,8])).toEqual([[1,2,3,4], [5,6,7,8]]);
        expect(split([1,2,3,4,5,6,7])).toEqual([[1,2,3], [4,5,6,7]]);
        
    });
});
