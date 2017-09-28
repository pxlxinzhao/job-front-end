import { NgModule } from '@angular/core';
import { MyPipe } from './my/my';
import { TimeDiffPipe } from './my/timeDiff'

@NgModule({
	declarations: [MyPipe, TimeDiffPipe],
	imports: [],
	exports: [MyPipe, TimeDiffPipe]
})
export class PipesModule {}
