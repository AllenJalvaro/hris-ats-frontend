

import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FILTER_TYPES } from "./types";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

export function FilterSection({ filter, values, onChange }) {
  if (filter.type === FILTER_TYPES.CHECKBOX) {
    return (
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">{filter.label}</h4>
        {filter.options.map((option) => (
          <div key={option.value} className="flex items-center gap-2">
            <Checkbox
              id={option.value}
              checked={values.includes(option.value)}
              onCheckedChange={(checked) => {
                if (checked) {
                  onChange([...values, option.value]);
                } else {
                  onChange(values.filter((v) => v !== option.value));
                }
              }}
            />
            <Label htmlFor={option.value} className="text-sm">
              {option.label}
            </Label>
          </div>
        ))}
      </div>
    );
  }

  if (filter.type === FILTER_TYPES.RANGE) {
    return (
      <div>
        <h4 className="text-sm font-semibold mb-2">{filter.label}</h4>
        <Slider
          value={values}
          onValueChange={onChange}
          min={filter.min}
          max={filter.max}
          step={filter.step || 1}
        />
        <div className="text-xs text-muted-foreground mt-1">
          {values[0]} – {values[1]}
        </div>
      </div>
    );
  }

  if (filter.type === FILTER_TYPES.DATE_RANGE) {
    const [startDate, endDate] = values || [];

    return (
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">{filter.label}</h4>

        <div>
          <label className="block text-xs text-muted-foreground mb-1">
            Start Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full !bg-transparent !border-gray-200 !text-xs justify-between font-normal"
              >
                {startDate
                  ? new Date(startDate).toLocaleDateString()
                  : "Select start date"}
                <CalendarIcon className="ml-auto h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate ? new Date(startDate) : undefined}
                captionLayout="dropdown"
                onSelect={(selectedDate) => {
                  const updated = [selectedDate, endDate];
                  onChange(updated);
                }}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="block text-xs text-muted-foreground mb-1">
            End Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full !bg-transparent !border-gray-200 !text-xs justify-between font-normal"
              >
                {endDate
                  ? new Date(endDate).toLocaleDateString()
                  : "Select end date"}
                <CalendarIcon className="ml-auto h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={endDate ? new Date(endDate) : undefined}
                captionLayout="dropdown"
                onSelect={(selectedDate) => {
                  const updated = [startDate, selectedDate];
                  onChange(updated);
                }}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    );
  }

  return null;
}
