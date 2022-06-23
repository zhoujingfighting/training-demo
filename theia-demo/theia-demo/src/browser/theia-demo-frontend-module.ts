/**
 * Generated using theia-extension-generator
 */
import { TheiaDemoCommandContribution, TheiaDemoMenuContribution } from './theia-demo-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';

export default new ContainerModule(bind => {

    // add your contribution bindings here
    bind(CommandContribution).to(TheiaDemoCommandContribution);
    bind(MenuContribution).to(TheiaDemoMenuContribution);
    /**
     * 这个是最简单的bind方式
     */

});
