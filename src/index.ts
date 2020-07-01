class A extends GainNode {
  nyan="nyan!"
  constructor(context: BaseAudioContext, options?: GainOptions) {
    super(context, options);
    console.log("created!");
  }
}
console.log(new A(new AudioContext()));