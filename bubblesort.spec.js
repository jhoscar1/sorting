describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sorts an unsorted array', function() {
      expect(bubbleSort([5,3,2,4,1,24,7])).toEqual([1,2,3,4,5,7,24]);
      expect(bubbleSort([10, 110, 22, 1])).toEqual([1, 10, 22, 110]);
      expect(bubbleSort([6, 32, 21, 45, 40, 2])).toEqual([2, 6, 21, 32, 40, 45]);
  });
});

describe('Has a working swap function' ,function() {
    beforeEach(function() {
        spyOn(window, 'swap').and.callThrough();
    });
    it('swap is called the appropriate amount of times',function(){
        bubbleSort([5,3,2,4]);
        expect(swap.calls.count()).toEqual(4);
    });
    it('swap is called the appropriate amount of times',function(){
        bubbleSort([10, 110, 22, 1]);
        expect(swap.calls.count()).toEqual(4);
    });
    it('swap is called the appropriate amount of times',function(){
        bubbleSort([6, 32, 21, 45, 40, 2]);
        expect(swap.calls.count()).toEqual(7);
    });    
    it('swap is not called when array is already sorted', function() {
        bubbleSort([2, 3, 4, 5]);
        expect(swap.calls.count()).toEqual(0);
    });
})
