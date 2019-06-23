export default function decorate(...decorators) {
  return Component => {
    return decorators.reduceRight((accum, decorator) => {
      return decorator(accum);
    }, Component);
  };
}
