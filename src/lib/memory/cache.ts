<<<<<<< Updated upstream
interface MemoryCache {
  key: string;
  value: unknown;
  expiresAt: number;
=======
import { getDbInstance } from "../db/core";

interface MemoryCache {
  key: string;
  value: any;
  timestamp: number;
  ttl: number;
>>>>>>> Stashed changes
}

class MemoryCachingLayer {
  private cache: Map<string, MemoryCache> = new Map();
  private maxSize: number = 1000;
  private defaultTtl: number = 300000;
<<<<<<< Updated upstream
  private hits: number = 0;
  private misses: number = 0;

  async get(key: string): Promise<unknown | null> {
    const entry = this.cache.get(key);
    if (!entry) {
      this.misses += 1;
      return null;
    }

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      this.misses += 1;
      return null;
    }

    this.hits += 1;
    this.cache.delete(key);
    this.cache.set(key, entry);
    return entry.value;
  }

  async set(key: string, value: unknown, ttl?: number): Promise<void> {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey) {
        this.cache.delete(oldestKey);
      }
    }

    const now = Date.now();
    this.cache.set(key, {
      key,
      value,
      expiresAt: now + (ttl ?? this.defaultTtl),
=======

  async get(key: string): Promise<any | null> {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.value;
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    if (this.cache.size >= this.maxSize) {
      const oldest = Array.from(this.cache.entries()).sort(
        (a, b) => a[1].timestamp - b[1].timestamp
      )[0];
      this.cache.delete(oldest[0]);
    }

    this.cache.set(key, {
      key,
      value,
      timestamp: Date.now(),
      ttl: ttl || this.defaultTtl,
>>>>>>> Stashed changes
    });
  }

  async invalidate(pattern: string): Promise<void> {
    const regex = new RegExp(pattern);
    for (const key of this.cache.keys()) {
      if (regex.test(key)) {
        this.cache.delete(key);
      }
    }
  }

  async clear(): Promise<void> {
    this.cache.clear();
<<<<<<< Updated upstream
    this.hits = 0;
    this.misses = 0;
=======
>>>>>>> Stashed changes
  }

  stats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
<<<<<<< Updated upstream
      hits: this.hits,
      misses: this.misses,
=======
>>>>>>> Stashed changes
    };
  }
}

export const memoryCache = new MemoryCachingLayer();
