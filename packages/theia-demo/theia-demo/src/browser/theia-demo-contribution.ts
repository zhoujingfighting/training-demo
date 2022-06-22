import { injectable, inject } from '@theia/core/shared/inversify';
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { CommonMenus } from '@theia/core/lib/browser';

export const TheiaDemoCommand: Command = {
    id: 'TheiaDemo.command',
    label: 'Say Hello'
};

@injectable()
export class TheiaDemoCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(TheiaDemoCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
    /**
     * TODO: 与下面的菜单联合，点击菜单后，弹出hello world
     */

}

@injectable()
export class TheiaDemoMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: TheiaDemoCommand.id,
            label: TheiaDemoCommand.label
        });
    }    
    /**
     * TODO: 添加一个`文件`菜单选项，
     */
}
