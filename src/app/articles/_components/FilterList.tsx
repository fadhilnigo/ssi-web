import {
  Button, Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,
} from '~/@shared/_components/ui';

const FilterList = () => (
  <div className="flex justify-between">
    <div>
      <Select>
        <SelectTrigger className="w-60">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Popular</SelectItem>
            <SelectItem value="banana">Latest</SelectItem>
            <SelectItem value="blueberry">Oldest</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input placeholder="type here to search" />
      <Button type="button" className="bg-backgroundPrimary">Search</Button>
    </div>
  </div>
);

export default FilterList;
