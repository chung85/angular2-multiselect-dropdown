import { OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ListItem } from './multiselect.model';
import { DropdownSettings } from './multiselect.interface';
export declare const DROPDOWN_CONTROL_VALUE_ACCESSOR: any;
export declare class AngularMultiSelect implements OnInit, ControlValueAccessor {
    data: Array<ListItem>;
    settings: DropdownSettings;
    onSelect: EventEmitter<ListItem>;
    onDeSelect: EventEmitter<ListItem>;
    onSelectAll: EventEmitter<Array<ListItem>>;
    onDeSelectAll: EventEmitter<Array<ListItem>>;
    selectedItems: Array<ListItem>;
    isActive: boolean;
    isSelectAll: boolean;
    filter: ListItem;
    defaultSettings: DropdownSettings;
    constructor();
    ngOnInit(): void;
    ngDoCheck(): void;
    onItemClick(item: ListItem, index: number, evt: Event): boolean;
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    trackByFn(index: number, item: ListItem): Number;
    isSelected(clickedItem: ListItem): boolean;
    addSelected(item: ListItem): void;
    removeSelected(clickedItem: ListItem): void;
    toggleDropdown(evt: any): boolean;
    closeDropdown(): void;
    toggleSelectAll(): void;
}
export declare class AngularMultiSelectModule {
}
