<script lang="ts">
  // Import components here
  import { Label, Point } from 'dmvis/components';
  import { OriginX, OriginY } from 'dmvis/enums';
  import { TemplateVis } from 'dmvis';
</script>

<main>
  <h1>Welcome to the DMVis Gallery</h1>
  <p>Below is an example import from the <code>DMVis</code> library.</p>
  <hr />
  <svg style="border: 1px solid black" width="500" height="500">
    <Label
      x={100}
      y={100}
      text="Hello, world!"
      textColor="black"
      color="#fe7215"
      originX={OriginX.Left}
      originY={OriginY.Top}
      rotationDegrees={0}
      opacity={'1'}
      radiusX={5}
      radiusY={5}
      hasBackground={true} />
    <Point x={100} y={100} radius={5} />
    <TemplateVis />
  </svg>
</main>

<style>
  /* Add styles here */
</style>
