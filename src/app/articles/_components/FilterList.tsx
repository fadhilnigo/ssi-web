'use client';

import { KeyboardEvent, useState } from 'react';
import cx from 'classnames';
import {
  Button, Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,
} from '~/@shared/_components/ui';
import { useArticleContext } from './ArticleProvider';

const FilterList = () => {
  const { params, setParams } = useArticleContext();

  const [search, setSearch] = useState(params.search);

  const selectValueMap = () => {
    if (params.sort === 'desc' && params.sortBy === 'update') {
      return 'latest';
    }
    if (params.sort === 'asc' && params.sortBy === 'update') {
      return 'oldest';
    }
    return '';
  };

  const hanldeSortBy = (v: string) => {
    if (v === 'latest') {
      setParams((prev) => ({
        ...prev,
        sortBy: 'update',
        sort: 'desc',
      }));
    }

    if (v === 'oldest') {
      setParams((prev) => ({
        ...prev,
        sortBy: 'update',
        sort: 'asc',
      }));
    }
  };

  const handleSearch = () => {
    setParams((prev) => ({
      ...prev,
      search,
    }));
  };

  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      handleSearch();
    }
  };

  return (
    <div className={cx(
      'flex flex-col-reverse justify-normal gap-4',
      'md:flex-row md:justify-between md:gap-0',
    )}
    >
      <div>
        <Select
          onValueChange={hanldeSortBy}
          value={selectValueMap()}
        >
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectItem value="popular">Popular</SelectItem> */}
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={cx(
        'flex w-full items-center space-x-2 mb-4',
        'md:max-w-sm md:mb-0',
      )}
      >
        <Input
          placeholder="type here to search"
          value={search}
          onChange={(e) => { setSearch(e.target.value); }}
          onKeyDown={handlePressEnter}
          className="flex-grow"
        />
        <Button
          type="button"
          className="bg-backgroundPrimary"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>

  );
};

export default FilterList;
